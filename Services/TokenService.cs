

using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using finance.model;
using Microsoft.IdentityModel.Tokens;

namespace finance.Services
{
    public class TokenService
    {

        public byte[] TokenSecret { get;  }

        public static string GenerateToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            // var key = Configuration.TokenSecret;
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Email.ToString()),
                    new Claim(ClaimTypes.Role, user.Role.ToString()),
                    new Claim(ClaimTypes.Sid, user.Id.ToString())

                }),
                Expires = DateTime.UtcNow.AddHours(24),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key: Settings.TokenSecret), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}