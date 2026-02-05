$images = Get-ChildItem -Path "images" -File
$contentFiles = Get-ChildItem -Include *.html,*.css,*.js -Recurse

# Create destination if not exists
if (-not (Test-Path "choosen")) {
    New-Item -ItemType Directory -Force -Path "choosen"
}

foreach ($img in $images) {
    $imgName = $img.Name
    $isUsed = $false
    
    foreach ($file in $contentFiles) {
        if ($file.FullName -like "*\choosen\*") { continue }
        if ($file.FullName -like "*\images\*") { continue }
        
        $content = Get-Content $file.FullName -Raw
        if ($content -match $imgName) {
            $isUsed = $true
            break
        }
    }
    
    if (-not $isUsed) {
        Write-Host "Moving unused: $imgName"
        Move-Item -Path $img.FullName -Destination "choosen"
    } else {
        # Write-Host "Used: $imgName"
    }
}
