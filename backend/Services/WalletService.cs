using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Finance.model;
using Finance.Repository;

namespace Finance.Services
{
    public class WalletService
    {
        public WalletService(WalletRepository wr)
        {
            WalletRepository = wr;
        }

        public WalletRepository WalletRepository { get; }

        public async  Task<Wallet> CreateWallet(Wallet w, string username ) {
            w.UserID = username;
            return await WalletRepository.CreateAsync(w);
        } 

        public List<Wallet> GetWalletByUser(string username)=> WalletRepository.GetByUser(username);

        public Wallet GetByName( string walletName, string userId) =>  WalletRepository.GetByName(walletName, userId);

    }
}