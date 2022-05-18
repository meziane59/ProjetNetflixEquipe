using System;
using System.Collections.Generic;

#nullable disable

namespace NetflixApi.Models
{
    public partial class ProfilFilm
    {
        public int IdProfil { get; set; }
        public int IdFilm { get; set; }

        public virtual Film IdFilmNavigation { get; set; }
        public virtual Profil IdProfilNavigation { get; set; }
    }
}
