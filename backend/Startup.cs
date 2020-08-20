using System;
using System.Text;
using finance.model;
using finance.Repository;
using finance.Services;
using Finance.Repository;
using Finance.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace finance
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.Configure<DatabaseSettings>(
                Configuration.GetSection(nameof(DatabaseSettings)));

            services.AddSingleton<IDatabaseSettings>(sp =>
                sp.GetRequiredService<IOptions<DatabaseSettings>>().Value);

            services.AddSingleton<UserRepository>();
            services.AddSingleton<UserService>();


            services.AddSingleton<WalletService>();
            services.AddSingleton<WalletRepository>();

            services.AddSingleton<UserRepository>();
            services.AddSingleton<UserService>();

            services.AddSingleton<SpendRepository>();
            services.AddSingleton<SpendService>();

            services.AddControllers();


            LoadSettings();
            //JWT
            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(x =>
            {
                x.RequireHttpsMetadata = false;
                x.SaveToken = true;
                x.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Settings.TokenSecret),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };
            });
        }

        private void LoadSettings()
        {
            Settings.TokenSecret = GetTokenKey();
        }

        private byte[] GetTokenKey()
        {
            //TODO change to environment variable
            var tokensecret = Configuration.GetSection("TokenSecret").Value;
            if (string.IsNullOrWhiteSpace(tokensecret)) throw new Exception("Cant find TokenSecret on settings.json");
            return Encoding.ASCII.GetBytes(tokensecret);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(x => x
               .AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader());

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
