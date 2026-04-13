$files = Get-ChildItem "assets\elartedeconectarlospuntos\*.svg"

$utf8NoBom = New-Object System.Text.UTF8Encoding $false

foreach ($f in $files) {
    if ($f.Name -match "Juego de la" -or $f.Name -match "Juego") {
        $content = [System.IO.File]::ReadAllText($f.FullName)
        if ($content -notmatch 'viewBox=') {
            if ($content -match '<svg[^\>]*width="([\d\.]+)"[^\>]*height="([\d\.]+)"') {
                $w = $matches[1]
                $h = $matches[2]
                $newContent = $content -replace '<svg([^>]*)', "<svg`$1 viewBox=`"0 0 $w $h`""
                # The above regex might apply globally, but -replace does by default. Let's do it safely.
                $newContent = [regex]::Replace($content, '(<svg\s+width="[\d\.]+"\s+height="[\d\.]+)"', "`${1}`" viewBox=`"0 0 $w $h`"")
                [System.IO.File]::WriteAllText($f.FullName, $newContent, $utf8NoBom)
                Write-Host "Fixed: $($f.Name) with $w $h"
            } else {
                Write-Host "Regex didn't match: $($f.Name)"
            }
        } else {
            Write-Host "Already has viewBox: $($f.Name)"
        }
    }
}
