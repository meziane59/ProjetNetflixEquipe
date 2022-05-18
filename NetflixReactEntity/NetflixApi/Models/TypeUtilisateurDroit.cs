using System;
using System.Collections.Generic;

#nullable disable

namespace NetflixApi.Models
{
    public partial class TypeUtilisateurDroit
    {
        public int IdTypeUtilisateur { get; set; }
        public int IdDroitsUtilisateurs { get; set; }

        public virtual DroitsUtilisateur IdDroitsUtilisateursNavigation { get; set; }
        public virtual TypeUtilisateur IdTypeUtilisateurNavigation { get; set; }
    }
}
