addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // 定义一个简单的字符数组，您可以根据需要扩展它
  const chars = ['💩']; // 添加您喜欢的emoji或字符
  let codeRainString = '';
  for (let i = 0; i < 500; i++) { // 控制生成的字符数量
    codeRainString += chars[Math.floor(Math.random() * chars.length)];
  }

  // 将生成的字符串包裹在<span>标签中，并添加一些基础样式
  const rainSpan = `<span style="animation-delay: ${Math.random() * 5}s;">${codeRainString}</span>`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>💩💩💩💩💩</title>
  <style>
    body {
      margin: 0;
      overflow: hidden;
      font-family: monospace;
      background-color: black;
      color: lime;
    }
    .rain {
      position: relative;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      pointer-events: none; /* 防止用户与雨滴交互 */
    }
    .rain span {
      position: absolute;
      top: -100%; /* 从屏幕顶部外开始 */
      white-space: nowrap;
      font-size: 2em; /* 调整字体大小 */
      animation: fall 5s linear infinite;
    }
    @keyframes fall {
      0% { top: -100%; }
      100% { top: 120%; } /* 稍微超出屏幕底部以确保完全消失 */
    }
  </style>
</head>
<body>
  <div class="rain">
    ${rainSpan} <!-- 这里插入生成的代码雨字符串 -->
    <!-- 若要增加雨滴密度，可以复制上面的<span>标签并修改animation-delay值 -->
  </div>
  <script>
    // 虽然为了简化我们省略了动态生成雨滴的代码，
    // 但您可以在此处添加JavaScript来根据需要动态生成更多雨滴。
    // 例如，使用setInterval或requestAnimationFrame来循环创建新的<span>元素，
    // 并将其添加到.rain容器中，同时设置随机的animation-delay值。
  </script>
</body>
</html>
`

  return new Response(html, {
    headers: { 'Content-Type': 'text/html' },
  })
}
