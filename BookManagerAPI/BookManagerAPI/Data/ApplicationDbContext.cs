using BookManagerAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace BookManagerAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Book> Books { get; set; }
    }
}
