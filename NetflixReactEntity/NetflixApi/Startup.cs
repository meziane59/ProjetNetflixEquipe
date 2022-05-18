using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using NetflixApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NetflixApi
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

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "NetflixApi", Version = "v1" });
            });

            const string corsUrlKey = "Security:Cors:Url";

            // Parametres CORS (Origine)
            services.AddCors(cors =>
            {
                string url = this.Configuration[corsUrlKey];
                cors.AddPolicy("AllowAll", o =>
                {
                    o.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
                });
                //cors.AddPolicy("LimitToOneOrigin", o =>
                //{
                //    o.WithOrigins("192.168.0.1").AllowAnyMethod().AllowAnyHeader();
                //});
            });
            services.AddDbContext<masterContext>();
        }


        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "NetflixApi v1"));
            }

            app.UseCors(options =>
            {
                options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
            });


            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
