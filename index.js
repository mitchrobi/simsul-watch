class CryptoWatchList {
    constructor(name) {
      this.name = name;
      this.cryptoList = [];
    }
  
    addToWatchList(cryptoName, symbol, currentPrice) {
      const crypto = {
        name: cryptoName,
        symbol: symbol,
        currentPrice: currentPrice,
      };
      this.cryptoList.push(crypto);
      console.log(`Added ${cryptoName} (${symbol}) to the ${this.name} watch list.`);
    }
  
    removeFromWatchList(symbol) {
      const index = this.cryptoList.findIndex(crypto => crypto.symbol === symbol);
      if (index !== -1) {
        const removedCrypto = this.cryptoList.splice(index, 1)[0];
        console.log(`Removed ${removedCrypto.name} (${symbol}) from the ${this.name} watch list.`);
      } else {
        console.log(`${symbol} not found in the ${this.name} watch list.`);
      }
    }
  
    displayWatchList() {
      console.log(`
        Watch List: ${this.name}
        Cryptocurrencies: ${this.cryptoList.map(crypto => `${crypto.name} (${crypto.symbol}) - $${crypto.currentPrice}`).join(', ')}
      `);
    }
  }
  
  // Example usage
  const myCryptoWatchList = new CryptoWatchList('My Crypto Watchlist');
  
  myCryptoWatchList.addToWatchList('Bitcoin', 'BTC', 60000);
  myCryptoWatchList.addToWatchList('Ethereum', 'ETH', 2500);
  myCryptoWatchList.addToWatchList('Ripple', 'XRP', 1.5);
  
  myCryptoWatchList.displayWatchList();
  
  myCryptoWatchList.removeFromWatchList('ETH');
  
  myCryptoWatchList.displayWatchList();
  