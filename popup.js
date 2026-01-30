document.addEventListener('DOMContentLoaded', function() {
  const submitBtn = document.getElementById('submitBtn');
  const messageDiv = document.getElementById('message');
  
  // 虛擬幣網站列表
  const websites = [
    'https://jacobhsu.github.io/crypto-watch/',
    'https://jacobhsu.github.io/crypto-watch/btc',
    'https://jacobhsu.github.io/crypto-watch/eth',
    'https://jacobhsu.github.io/tradingview-widgets',
    'https://jacobhsu.github.io/altfins-widgets/ETH#15M',
    'https://crypto-tv-signal.lovable.app/',
    'https://crypto-weekly-calendar.lovable.app/',
    "https://next-open-stock.vercel.app/crypto",
    'https://jacobhsu.github.io/taapi/',
    'https://www.pizzint.watch/',
    'https://github.com/JacobHsu/py-binance-api',
    'https://www.investing.com/crypto/bitcoin/technical',
    'https://www.investing.com/crypto/ethereum/technical',
    'https://www.panewslab.com/zh-hant',
  ];
  
  // 提交按鈕點擊事件
  submitBtn.addEventListener('click', function() {
    openCryptoSites();
  });

  // 為每個網站連結添加點擊事件
  const siteLinks = document.querySelectorAll('.sites-list a');
  siteLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const url = this.getAttribute('data-url');
      chrome.tabs.create({ url: url });
    });
  });
  
  // 開啟虛擬幣網站
  function openCryptoSites() {
    // 顯示處理中訊息
    showMessage('正在開啟虛擬幣網站...', true);
    
    // 開啟所有虛擬幣網站
    websites.forEach(url => {
      chrome.tabs.create({ url: url });
    });
  }
  
  // 顯示訊息
  function showMessage(text, isSuccess) {
    messageDiv.textContent = text;
    messageDiv.className = isSuccess ? 'message success' : 'message';
    
    // 3 秒後清除訊息
    setTimeout(() => {
      messageDiv.textContent = '';
      messageDiv.className = 'message';
    }, 3000);
  }
}); 