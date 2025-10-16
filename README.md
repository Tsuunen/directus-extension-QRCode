# Directus Operation – QR Code

Une opération Directus permettant de **générer un QR Code localement** à partir d’un lien, puis de **l’enregistrer automatiquement dans les fichiers Directus**.

![QR Code Preview](./assets/directus-extension-QRCode.png)

---

## 🧩 Description

Cette opération peut être utilisée dans un **Flow Directus** pour créer un QR Code sans dépendre d’un service externe.  
Elle utilise la librairie [`qr-image`](https://github.com/alexeyten/qr-image) pour générer le QR Code directement côté serveur.

Le QR Code est enregistré dans la collection `directus_files`, avec un nom et un titre basés sur le lien fourni.

---

MIT 2025
