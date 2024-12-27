using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookManagerAPI.Models
{
    public class Book
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [Column(TypeName ="nvarchar(100)")]
        public string Title { get; set; } = "";
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Author { get; set; } = "";
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        [RegularExpression(@"^\d{3}-\d{10}$")]
        public string ISBN { get; set; } = "";

        [Required]
        public DateTime PublicationDate { get; set; }
    }
}
