import Crypto from '../entity/Crypto.js';
import CryptoRepository from '../repository/CryptoRepository.js';

class CryptoService {
  constructor({ repository } = {}) {
    this.repository = repository || new CryptoRepository();
  }
  async *list() {
    const options = { page: 1, limit: 5 }
    const listCrypto = []
    const { data: cryptos } = await this.repository.list(...Object.values(options))
    if(cryptos.length > 0) {
      for (const crypto of cryptos) {
        listCrypto.push(new Crypto(crypto))
      }
    }
    options.page += 1
    yield listCrypto
  }
}

export default CryptoService;
