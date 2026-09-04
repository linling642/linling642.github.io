$title = Read-Host "请输入文章标题"
if (-not $title) { $title = "未命名文章" }
$date = Get-Date -Format "yyyy-MM-dd"
$slug = $title -replace '[\\/:*?"<>|]', '' -replace '\s+', '-'
if (-not $slug) { $slug = "post" }
$postsDir = Join-Path $PSScriptRoot "..\src\content\posts"
if (-not (Test-Path $postsDir)) { New-Item -ItemType Directory -Force -Path $postsDir | Out-Null }
$fileName = "$date-$slug.md"
$filePath = Join-Path $postsDir $fileName
$i = 1
while (Test-Path $filePath) { $fileName = "$date-$slug-$i.md"; $filePath = Join-Path $postsDir $fileName; $i++ }
$template = "---`n" +
"title: $title`n" +
"date: $date`n" +
"category: 医保政策`n" +
"tags: []`n" +
"source: https://www.nhc.gov.cn/`n" +
"author: 资深陪诊顾问`n" +
"description: `n" +
"---`n`n" +
"> 陪诊员提醒：（填一句反差/提醒）`n`n" +
"## 正文`n`n" +
"（在这里写……）`n"
[System.IO.File]::WriteAllText($filePath, $template, [System.Text.UTF8Encoding]::new($true))
Write-Host "已创建文章：$filePath"
Write-Host "正在打开编辑器，请填写正文……"
Start-Process $filePath