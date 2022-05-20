using Microsoft.EntityFrameworkCore;
using NetflixApi.Models;

namespace NetflixApi.Tools
{
    public class DataDbContext : DbContext
    {
        public DataDbContext()
        {

        }

        public DbSet<Film> Films { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source = (localdb)\netflixDB; Integrated Security = True");
        }
    }
}
