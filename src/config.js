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
  grass:
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dfgb63o-7b3dee8d-149f-4957-a6c0-6894e8858a95.png/v1/fit/w_300,h_900/grass_type_symbol_anime_by_jormxdos_dfgb63o-300w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZnYjYzby03YjNkZWU4ZC0xNDlmLTQ5NTctYTZjMC02ODk0ZTg4NThhOTUucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.yskw3jHwOyeoOpQ-Cn-oPnsQMZUnKJYz3j0mtpCPyRc',
  normal:
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dfgb62b-630c620e-5752-4a78-8268-6077295e5e3f.png/v1/fit/w_300,h_900/normal_type_symbol_anime_by_jormxdos_dfgb62b-300w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZnYjYyYi02MzBjNjIwZS01NzUyLTRhNzgtODI2OC02MDc3Mjk1ZTVlM2YucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.qkOK1AzNiWvY6sDdHBGvpVD6wwEsV1y6kQeUHUoK648',
  fire: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffqwy2-a24cae67-cfab-4753-ac92-74d30c736bc8.png/v1/fit/w_300,h_900,q_70,strp/fire_type_symbol_sinnoh_by_jormxdos_dffqwy2-300w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmcXd5Mi1hMjRjYWU2Ny1jZmFiLTQ3NTMtYWM5Mi03NGQzMGM3MzZiYzgucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.RgeWCrkZum5icJa59g7U3xySA_Yv2oBA8H_BzPDL018',
  water:
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffqwyd-f2c7daf9-a780-400e-aa48-dd28e31f0ea8.png/v1/fit/w_300,h_900,q_70,strp/water_type_symbol_sinnoh_by_jormxdos_dffqwyd-300w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmcXd5ZC1mMmM3ZGFmOS1hNzgwLTQwMGUtYWE0OC1kZDI4ZTMxZjBlYTgucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Bb9b-I6CagzSvpl7ZEfPwPcZ-brgTYoH1_ranRa-BjI',
  electric:
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffqwyh-61329514-fd15-4c9c-a34d-5082df139ea4.png/v1/fit/w_300,h_900,q_70,strp/electric_type_symbol_sinnoh_by_jormxdos_dffqwyh-300w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmcXd5aC02MTMyOTUxNC1mZDE1LTRjOWMtYTM0ZC01MDgyZGYxMzllYTQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.km5RW4XSSmtNMDi4BP3-akdvWC7hxEkxyj2fZQPHuBA',
  ice: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dfgb63x-7db9075b-013f-4a42-a7a3-a6dc1530ef79.png/v1/fit/w_300,h_900/ice_type_symbol_anime_by_jormxdos_dfgb63x-300w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZnYjYzeC03ZGI5MDc1Yi0wMTNmLTRhNDItYTdhMy1hNmRjMTUzMGVmNzkucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.nsS7Mtb7A4g3MMLlO10AOE7cCCZgYroUw1e1kk1f2w0',
  fighting:
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffqwzc-0f53a076-1616-4e73-a563-b8087408c821.png/v1/fit/w_300,h_900/fighting_type_symbol_sinnoh_by_jormxdos_dffqwzc-300w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmcXd6Yy0wZjUzYTA3Ni0xNjE2LTRlNzMtYTU2My1iODA4NzQwOGM4MjEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4QKJ9l_b8eWuD3oxND-BN4KmAYc-SbfSfF-mO-rxU9Q',
  poison:
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dfgb64q-127bf799-af1b-47a1-86f2-2be9fcdd7ef4.png/v1/fit/w_300,h_900/poison_type_symbol_anime_by_jormxdos_dfgb64q-300w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZnYjY0cS0xMjdiZjc5OS1hZjFiLTQ3YTEtODZmMi0yYmU5ZmNkZDdlZjQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ag5l8q6BFRAn87iv6RG9pllyFatD3d3ao9jxIYwiZPo',
  ground:
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffqwzs-ad4d6ade-b780-4294-b87f-0de8aac6c625.png/v1/fit/w_300,h_900/ground_type_symbol_sinnoh_by_jormxdos_dffqwzs-300w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmcXd6cy1hZDRkNmFkZS1iNzgwLTQyOTQtYjg3Zi0wZGU4YWFjNmM2MjUucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.0n7DMDRCJTy_08vYa5spkxNTG8KU8lVAe_LsqPfz_b0',
  flying:
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dfgb65f-5d2456d5-1a8c-4c8e-90a9-80e1f6e2132f.png/v1/fit/w_300,h_900/flying_type_symbol_anime_by_jormxdos_dfgb65f-300w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZnYjY1Zi01ZDI0NTZkNS0xYThjLTRjOGUtOTBhOS04MGUxZjZlMjEzMmYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.UMH4ZUVoI2QK-N87or4xV9zQxpR_LUDgW9zqH3K4pq4',
  psychic:
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dfgb65w-74ef3cad-d93e-4ff4-85dd-b30d99d0e8b0.png/v1/fit/w_300,h_900/psychic_type_symbol_anime_by_jormxdos_dfgb65w-300w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZnYjY1dy03NGVmM2NhZC1kOTNlLTRmZjQtODVkZC1iMzBkOTlkMGU4YjAucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ve1oUfOVmDqbsGKq_aBdSOF7H7fJT4fEONHcS6tKsTM',
  bug: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffqx0t-3e7a76c3-3809-47a7-896f-81b314124aac.png/v1/fit/w_300,h_900/bug_type_symbol_sinnoh_by_jormxdos_dffqx0t-300w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmcXgwdC0zZTdhNzZjMy0zODA5LTQ3YTctODk2Zi04MWIzMTQxMjRhYWMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.8CEXUNUO--_krK9ulIq0crDdZMCwiiwrfwBR9fml-40',
  rock: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffqx12-f47a3644-381f-4309-b843-bfce4cf9af7a.png/v1/fit/w_300,h_900/rock_type_symbol_sinnoh_by_jormxdos_dffqx12-300w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmcXgxMi1mNDdhMzY0NC0zODFmLTQzMDktYjg0My1iZmNlNGNmOWFmN2EucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.SCrlfhApnlqe8shmMnSyzLGmm5hCDKX_DANH_8NQHUQ',
  ghost:
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffqx1b-fe8d9f13-73ff-4df9-9ac1-ab60d8692796.png/v1/fit/w_300,h_900/ghost_type_symbol_sinnoh_by_jormxdos_dffqx1b-300w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmcXgxYi1mZThkOWYxMy03M2ZmLTRkZjktOWFjMS1hYjYwZDg2OTI3OTYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.RezcsfVK1_Wxl_UciSeSvBlpYMvhGOci4wR40K13h4g',
  dragon:
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffqx1k-50f1f0c0-06a0-4f13-a843-b1af269f0a67.png/v1/fit/w_300,h_900/dragon_type_symbol_sinnoh_by_jormxdos_dffqx1k-300w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmcXgxay01MGYxZjBjMC0wNmEwLTRmMTMtYTg0My1iMWFmMjY5ZjBhNjcucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Qv3Y-5e2GEMFXswSWLezHOJ45uNRSjCo1ILtRHFMGlo',
  dark: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffqx1v-f3764e90-b1f6-432a-897e-a41e6c68628a.png/v1/fit/w_300,h_900/dark_type_symbol_sinnoh_by_jormxdos_dffqx1v-300w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmcXgxdi1mMzc2NGU5MC1iMWY2LTQzMmEtODk3ZS1hNDFlNmM2ODYyOGEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.X3Zrd3fQsdbfJx6bXkSdiLKxdDAaT4iRjQheYvhRyGs',
  steel:
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffqx26-3f3df840-e25d-4ea5-a69c-b285d65e80eb.png/v1/fit/w_300,h_900/steel_type_symbol_sinnoh_by_jormxdos_dffqx26-300w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmcXgyNi0zZjNkZjg0MC1lMjVkLTRlYTUtYTY5Yy1iMjg1ZDY1ZTgwZWIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.f9vXGx-05tBmZLnT8aj-W6kGCpf5GKbefWISqgKjGhA',
  fairy:
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffqx2d-a0dfea1e-7899-45fa-9769-64eef178a09b.png/v1/fit/w_300,h_900/fairy_type_symbol_sinnoh_by_jormxdos_dffqx2d-300w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmcXgyZC1hMGRmZWExZS03ODk5LTQ1ZmEtOTc2OS02NGVlZjE3OGEwOWIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.I5SlsJRSLWpbhw-FeEcXnd_4PmbyHORu6Jn6EdLiNk8',
};
/*
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
};*/

export const COLOR_B = {
  grass: '#c8e4d8',
  normal: '#e7ebeb',
  fire: '#f9cbb3',
  water: '#99cce5',
  bug: '#e8eda3',
  electric: '#fbf4b2',
  ice: '#d9f4f3',
  fighting: '#fae9b2',
  poison: '#e3d1f6',
  ground: '#e2cfb3',
  flying: '#c5ede9',
  psychic: '#efc3ed ',
  rock: '#e9e7d4',
  ghost: '#c8bac7',
  dragon: '#b9c3dc',
  dark: '#bdb9b8',
  steel: '#e8f3f6',
  fairy: '#f4e1f1',
};

export const COLOR_IM = {
  grass: '#48A77Fff',
  normal: '#abadb2',
  fire: '#e46727ff',
  water: '#0081c0',
  bug: '#c7d41a',
  electric: '#f4dc00',
  ice: '#a2e5e2',
  fighting: '#efb700',
  poison: '#a468e3',
  ground: '#b78842',
  flying: '#6fd3c8',
  psychic: '#d96bd2',
  rock: '#c8c595',
  ghost: '#765474',
  dragon: '#506ba8',
  dark: '#5c514e',
  steel: '#8fc3d3',
  fairy: '#e4b6dc',
};
