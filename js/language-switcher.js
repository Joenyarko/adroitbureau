/**
 * ADROIT BUREAU - LANGUAGE SWITCHER
 * Bilingual support system (English/French)
 */

class LanguageSwitcher {
  constructor() {
    this.currentLanguage = this.getStoredLanguage() || 'en';
    this.translations = null;
    this.init();
  }

  /**
   * Initialize the language switcher
   */
  async init() {
    await this.loadTranslations();
    this.createLanguageSwitcher();
    this.applyTranslations();
    this.attachEventListeners();
  }

  /**
   * Load translations from JSON file
   */
  async loadTranslations() {
    try {
      const response = await fetch('./data/translations.json');
      this.translations = await response.json();
    } catch (error) {
      console.error('Error loading translations:', error);
      // Fallback to English if translations fail to load
      this.currentLanguage = 'en';
    }
  }

  /**
   * Get stored language from localStorage
   */
  getStoredLanguage() {
    return localStorage.getItem('adroit_language');
  }

  /**
   * Store language preference in localStorage
   */
  setStoredLanguage(lang) {
    localStorage.setItem('adroit_language', lang);
  }

  /**
   * Create language switcher dropdown in the header
   */
  createLanguageSwitcher() {
    const header = document.querySelector('.header-nav');
    if (!header) return;

    const switcherHTML = `
      <div class="language-switcher">
        <button class="language-btn" id="languageBtn" aria-label="Change language">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          <span class="current-lang">${this.currentLanguage.toUpperCase()}</span>
          <svg class="chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div class="language-dropdown" id="languageDropdown">
          <button class="language-option ${this.currentLanguage === 'en' ? 'active' : ''}" data-lang="en">
            <span class="lang-flag">🇬🇧</span>
            <span class="lang-name">English</span>
          </button>
          <button class="language-option ${this.currentLanguage === 'fr' ? 'active' : ''}" data-lang="fr">
            <span class="lang-flag">🇫🇷</span>
            <span class="lang-name">Français</span>
          </button>
        </div>
      </div>
    `;

    // Insert before the brochure button or at the end of nav
    const brochureBtn = header.querySelector('.btn-brochure');
    if (brochureBtn) {
      brochureBtn.insertAdjacentHTML('beforebegin', switcherHTML);
    } else {
      header.insertAdjacentHTML('beforeend', switcherHTML);
    }
  }

  /**
   * Attach event listeners
   */
  attachEventListeners() {
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    const languageOptions = document.querySelectorAll('.language-option');

    if (!languageBtn || !languageDropdown) return;

    // Toggle dropdown
    languageBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      languageDropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
      languageDropdown.classList.remove('active');
    });

    // Language selection
    languageOptions.forEach(option => {
      option.addEventListener('click', (e) => {
        e.stopPropagation();
        const selectedLang = option.dataset.lang;
        this.switchLanguage(selectedLang);
        languageDropdown.classList.remove('active');
      });
    });
  }

  /**
   * Switch to a different language
   */
  switchLanguage(lang) {
    if (lang === this.currentLanguage) return;

    this.currentLanguage = lang;
    this.setStoredLanguage(lang);
    this.applyTranslations();
    this.updateLanguageButton();
    this.updateActiveOption();
  }

  /**
   * Update the language button text
   */
  updateLanguageButton() {
    const currentLangSpan = document.querySelector('.current-lang');
    if (currentLangSpan) {
      currentLangSpan.textContent = this.currentLanguage.toUpperCase();
    }
  }

  /**
   * Update active state of language options
   */
  updateActiveOption() {
    const options = document.querySelectorAll('.language-option');
    options.forEach(option => {
      if (option.dataset.lang === this.currentLanguage) {
        option.classList.add('active');
      } else {
        option.classList.remove('active');
      }
    });
  }

  /**
   * Apply translations to the page
   */
  applyTranslations() {
    if (!this.translations) return;

    const t = this.translations[this.currentLanguage];
    if (!t) return;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.dataset.i18n;
      const translation = this.getNestedTranslation(t, key);
      
      if (translation) {
        // Check if it's an input placeholder
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = translation;
        } else {
          element.textContent = translation;
        }
      }
    });

    // Update elements with data-i18n-html for HTML content
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
      const key = element.dataset.i18nHtml;
      const translation = this.getNestedTranslation(t, key);
      
      if (translation) {
        element.innerHTML = translation;
      }
    });

    // Update aria-labels
    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
      const key = element.dataset.i18nAria;
      const translation = this.getNestedTranslation(t, key);
      
      if (translation) {
        element.setAttribute('aria-label', translation);
      }
    });

    // Dispatch custom event for language change
    document.dispatchEvent(new CustomEvent('languageChanged', {
      detail: { language: this.currentLanguage }
    }));
  }

  /**
   * Get nested translation using dot notation
   * Example: "nav.home" -> translations.nav.home
   */
  getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
  }

  /**
   * Get current language
   */
  getCurrentLanguage() {
    return this.currentLanguage;
  }

  /**
   * Get translation for a specific key
   */
  translate(key) {
    if (!this.translations) return key;
    return this.getNestedTranslation(this.translations[this.currentLanguage], key) || key;
  }
}

// Initialize language switcher when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.languageSwitcher = new LanguageSwitcher();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = LanguageSwitcher;
}
