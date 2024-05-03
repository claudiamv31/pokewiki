export const API_URL = 'https://pokeapi.co/api/v2/';
export const IMAGES_REGION = [
  'https://archives.bulbagarden.net/media/upload/thumb/2/25/LGPE_Kanto_Map.png/450px-LGPE_Kanto_Map.png',
  'https://archives.bulbagarden.net/media/upload/thumb/6/64/JohtoMap.png/450px-JohtoMap.png',
  'https://archives.bulbagarden.net/media/upload/thumb/8/85/Hoenn_ORAS.png/450px-Hoenn_ORAS.png',
  'https://archives.bulbagarden.net/media/upload/thumb/0/08/Sinnoh_BDSP_artwork.png/450px-Sinnoh_BDSP_artwork.png',
  'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/03/Pokemon_B2W2_Unova_Map.jpg',
  'https://archives.bulbagarden.net/media/upload/thumb/8/8a/Kalos_alt.png/450px-Kalos_alt.png',
  'https://archives.bulbagarden.net/media/upload/thumb/0/0b/Alola_USUM_artwork.png/450px-Alola_USUM_artwork.png',
  'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/02/Poke%CC%81mon%20Espada%20y%20Escudo%20Galar%20mapa.jpg',
  'https://archives.bulbagarden.net/media/upload/thumb/2/22/Legends_Arceus_Hisui.png/450px-Legends_Arceus_Hisui.png',
  'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/a/a1/latest/20220803152242/Paldea.jpg/800px-Paldea.jpg',
];

export const TYPES = {
  metal:
    'https://upload.wikimedia.org/wikipedia/commons/archive/3/38/20200511081736%21Pok%C3%A9mon_Steel_Type_Icon.svg',
  normal:
    'https://upload.wikimedia.org/wikipedia/commons/archive/a/aa/20230404224437%21Pok%C3%A9mon_Normal_Type_Icon.svg',
  fighting:
    'https://upload.wikimedia.org/wikipedia/commons/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg',
  flying:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj771vdniU9iksgkjUg4tbwjBh0VWKs_1wnxf11Be2RkPmKbAXm_T5JH5cu0ozKz93lLM&usqp=CAU',
  poison:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg/120px-Pok%C3%A9mon_Poison_Type_Icon.svg.png?20200511082025',
  gorund:
    'https://upload.wikimedia.org/wikipedia/commons/archive/8/8d/20200511084748%21Pok%C3%A9mon_Ground_Type_Icon.svg',
  rock: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg',
  bug: 'https://image.pngaaa.com/410/4915410-middle.png',
  ghost:
    'https://d2bzx2vuetkzse.cloudfront.net/fit-in/0x450/unshoppable_producs/43a121c2-5536-4a99-ac25-6163a8aae377.jpeg',
  fire: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffqwy2-a24cae67-cfab-4753-ac92-74d30c736bc8.png/v1/fill/w_1280,h_1280,q_80,strp/fire_type_symbol_sinnoh_by_jormxdos_dffqwy2-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmcXd5Mi1hMjRjYWU2Ny1jZmFiLTQ3NTMtYWM5Mi03NGQzMGM3MzZiYzgucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.RgeWCrkZum5icJa59g7U3xySA_Yv2oBA8H_BzPDL018',
  water:
    'https://upload.wikimedia.org/wikipedia/commons/archive/0/0b/20200511081702%21Pok%C3%A9mon_Water_Type_Icon.svg',
  grass:
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffvl0s-d443a3b4-fa4e-47a6-99b4-d2a769785614.png/v1/fill/w_1280,h_1280/grass_type_symbol_galar_by_jormxdos_dffvl0s-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmdmwwcy1kNDQzYTNiNC1mYTRlLTQ3YTYtOTliNC1kMmE3Njk3ODU2MTQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.6-S1a0_YYhlP6eXW5QqrJk4jtv6b5a3MRuugxqhJ6EA',
  electric:
    'https://upload.wikimedia.org/wikipedia/commons/archive/a/a9/20200511085229%21Pok%C3%A9mon_Electric_Type_Icon.svg',
  psychic:
    'https://upload.wikimedia.org/wikipedia/commons/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg',
  ice: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg',
  dragon:
    'https://i.pinimg.com/564x/b3/16/84/b31684af30bcb16ecca94258232ffa83.jpg',
  dark: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg',
  fairy:
    'https://upload.wikimedia.org/wikipedia/commons/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg',
};
