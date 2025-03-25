Stahovanie z Githubu
1. Treba si vytvoriť nový file (napr.konicky)
2. Keď si vytvoríme file otvoríme GitBash konzolu a dostaneme sa to tohto fileu
    2.1 cd desktop
    2.2 cd konicky
3. Keď nám na konci zadávacieho riadku GitBash vypisuje "~/desktop/itlab" tak si môžme vytvoriť nový ssh-key
    2.1 ssh-keygen -t rsa -b 4096 -C "vasemail@gymmoldava.sk"
4. Keď máme vytvorený ssh kľúč (vieme ho nájsť aj v prieskumníku pre overenie: C:\Users\nazovusera\.ssh) napíšeme toto do konzole aby sme zapli ssh-agenta
    4.1 eval "$(ssh-agent -s)"
5. Teraz pridáme novo-vytvorený ssh-key do agenta
    5.1 ssh-add ~/.ssh/id_rsa
6. Teraz si skopírujeme tento ssh-key a dáme ho do GitHubu
    6.1 cat ~/.ssh/id_rsa.pub (týmto commandom do konzole nám vypíše ssh-public-key ktorý skopírujeme)
7. Pojdeme do GitHubu, klikneme na profil v pravom hornom rohu --> Settings --> SSH and GPG keys kde klikneme na "New SSH key" a do poľa "Key" zadáme skopírovaný ssh-public-key a pridáme kľúč
8. Keď to všetko máme vypneme zapneme GitBash, dostaneme sa zase do priečinku koníčky (bod 2.) a otestujeme či nám prepojenie funguje
    8.1 ssh -T git@github.com
9. Keď nám prepojenie funguje mala by nám konzola vypísať:
    9.1 Hi username! You've successfully authenticated...
10. Znovu vypneme zapneme GitBash, dostaneme sa naspäť do nášho foldru (bod 2.) a prepojíme local files s GitHubom
    10.1 git init
11. Teraz sa potrebujeme autentifikovať týmito commandami
    11.1 git config --global user.name "VaseGithubMeno"
    11.2 git config --global user.email "email@gymmoldava.sk"
    11.3 POZOR!!! user.name a user.email sa nemení, jediné čo treba zmeniť sú "hodnoty" v úvodzovkách
12. Ked nás konzola hodí do ďalšieho riadku skontrolujeme či je všetko dobre zadané
    12.1 git config --global --list
13. Ak je všetko správne, konzola by mala vypísať niečo takéto
    13.1 user.name=VaseGithubMeno
    13.2 user.email=email@gymmoldava.sk
14. Keď sú "hodnoty" správne, môžeme si naclonovať ("stiahnuť") všetky files z repa
    14.1 git clone git@github.com:Zkejm/Konicky.git
15. Tadá, všetko hotovo, keď sa v hociakom kroku vyskytne nejaký error, nejak sa so mnou spojte a ja to opravím

FARBY:
Main header: #FFE9C5
Pohybove aktivity: #D95F3A
Umelecke aktivity: #EF9849
Hudobne aktivity: #FCD6A5
Rozumove aktivity: #7BA8A3
Dobrodruzne aktivity: #338F9A
Ine aktivity: #1C4C70

# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates.

However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can run `Volar: Switch TS Plugin on/off` from VSCode command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
