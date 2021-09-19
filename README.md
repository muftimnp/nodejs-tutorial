# README 

```
git clone https://gitlab.com/jsjsclub/nodejs-tutorial.git
```
## Materi
```
1. HTML
2. CSS
3. JavaScript
4. Document Object Model (DOM)
```

### Note
```
1. https://docs.emmet.io/cheat-sheet/
2. https://developer.mozilla.org/en-US/docs/Web/HTML/Element (HTML note)
3. Ctrl + alt + L untuk formatting line code
4. Template literals (Template Strings) menggunakan (`)
5. Ctrl + shift + p info tentang shortcut
```

### Urutan naik git
```git
git add .
git commit -m "pesan nya apa"
git push -u origin namaBranch
```

### Bikin branch baru di git
```
git checkout -b branchBaru branchAsal
```

### git merge
```
git checkout branchYangNgeMerge
git merge branchManaYangDimerge
```

### git push berdasarkan commit SHA
```
git log master
git push <remotename> <commit SHA>:<remotebranchname>
```