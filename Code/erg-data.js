// Options de Bachelor
var artnum_bac = {"name": "Arts Numériques", "size": 0, "link": "http://www.erg.be/erg/spip.php?article132"};
var bd_bac = {"name": "Bande Dessinée", "size": 0, "link": "http://www.erg.be/erg/spip.php?article131"};
var anim_bac = {"name": "Cinéma d'Animation", "size": 0, "link": "http://www.erg.be/erg/spip.php?article123"};
var com_bac = {"name": "Communication Visuelle", "size": 0, "link": "http://www.erg.be/erg/spip.php?article126"};
var dessin_bac = {"name": "Dessin", "size": 0, "link": "http://www.erg.be/erg/spip.php?article119"};
var graphisme_bac = {"name": "Graphisme", "size": 0, "link": "http://www.erg.be/erg/spip.php?article133"};
var illu_bac = {"name": "Illustration", "size": 0, "link": "http://www.erg.be/erg/spip.php?article130"};
var instal_bac = {"name": "Installation / Performance", "size": 0, "link": "http://www.erg.be/erg/spip.php?article128"};
var peinture_bac = {"name": "Peinture", "size": 0, "link": "http://www.erg.be/erg/spip.php?article127"};
var photo_bac = {"name": "Photographie", "size": 0, "link": "http://www.erg.be/erg/spip.php?article122"};
var sculpture_bac = {"name": "Sculpture", "size": 0, "link": "http://www.erg.be/erg/spip.php?article120"};
var typo_bac = {"name": "Typographie", "size": 0, "link" : "http://www.erg.be/erg/spip.php?article125"};
var video_bac = {"name": "Vidéographie", "size": 0, "link": "http://www.erg.be/erg/spip.php?article124"};

// Les options sont rangés par pôle dans des arrays
var pole_art = [ artnum_bac, dessin_bac, instal_bac, peinture_bac, photo_bac, sculpture_bac, video_bac];
var pole_media = [com_bac, graphisme_bac, typo_bac];
var pole_narration = [bd_bac, anim_bac, illu_bac, photo_bac, video_bac];

// Options de Master
var artnum_master = {"name": "Arts Numériques", "size": 0, "link": "http://www.erg.be/erg/spip.php?article2813"};
var bd_master = {"name": "Bande Dessinée", "size": 0, "link": "http://www.erg.be/erg/spip.php?article2825"};
var anim_master = {"name": "Cinéma d'Animation", "size": 0, "link": "http://www.erg.be/erg/spip.php?article2824"};
var com_master = {"name": "Communication Visuelle", "size": 0, "link": "http://www.erg.be/erg/spip.php?article2823"};
var dessin_master = {"name": "Dessin", "size": 0, "link": "http://www.erg.be/erg/spip.php?article2821"};
var graphisme_master = {"name": "Graphisme", "size": 0, "link": "http://www.erg.be/erg/spip.php?article2822"};
var illu_master = {"name": "Illustration", "size": 0, "link": "http://www.erg.be/erg/spip.php?article2820"};
var instal_master = {"name": "Installation / Performance", "size": 0, "link": "http://www.erg.be/erg/spip.php?article2818"};
var peinture_master = {"name": "Peinture", "size": 0, "link": "http://www.erg.be/erg/spip.php?article2819"};
var photo_master = {"name": "Photographie", "size": 0, "link": "http://www.erg.be/erg/spip.php?article2817"};
var sculpture_master = {"name": "Sculpture", "size": 0, "link": "http://www.erg.be/erg/spip.php?article2816"};
var typo_master = {"name": "Typographie", "size": 0, "link" : "http://www.erg.be/erg/spip.php?article2815"};
var video_master = {"name": "Vidéographie", "size": 0, "link": "http://www.erg.be/erg/spip.php?article2814"};

var pole_master = [artnum_master, bd_master, anim_master, com_master, dessin_master, graphisme_master, 
                illu_master, instal_master, peinture_master, photo_master, sculpture_master, typo_master, video_master];

var erg = 
{
 "name": "erg",
 "children": [
  {
   "name": "Bachelor 1",
   "children": [
    {
     "name": "Pôle Art",
     "children": pole_art
    },
    {
     "name": "Pôle Media",
     "children": pole_media
    },
    {
     "name": "Pôle Narration",
     "children": pole_narration
    }
   ]
  },
  {
   "name": "Bachelor 2",
   "children": [
    {
     "name": "Pôle Art",
     "children": pole_art
    },
    {
     "name": "Pôle Media",
     "children": pole_media
    },
    {
     "name": "Pôle Narration",
     "children": pole_narration
    }
   ]
  },
  {
   "name": "Bachelor 3",
   "children": [
    {
     "name": "Pôle Art",
     "children": pole_art
    },
    {
     "name": "Pôle Media",
     "children": pole_media
    },
    {
     "name": "Pôle Narration",
     "children": pole_narration
    }
   ]
  },
  {
   "name": "Master 1",
   "children": [
    {"name": "Pratique de l'Art", "size": 0,
        "children": pole_master
    },
    {
      "name": "Récits et Expérimentations", "size": 0,
        "children": pole_master
    },
    {
      "name": "P.E.G.",
      "children": pole_master
        },
        {
          "name": "Erg EDIT", "size": 0,
            "children": pole_master
        }
       ]
      },
      {
       "name": "Master 2",
       "children": [
        {"name": "Pratique de l'Art", "size": 0,
            "children": pole_master
        },
        {
          "name": "Récits et Expérimentations", "size": 0,
            "children": pole_master
        },
        {
          "name": "P.E.G.",
          "children": [
            {
              "name": "Arts et Sciences", "size": 0,
                "children": pole_master
            },
            {
              "name": "Erg EDIT", "size": 0,
                "children": pole_master
            }
           ]
          }
        ]
      }
 ]
}