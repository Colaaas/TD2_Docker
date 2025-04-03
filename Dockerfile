# Utiliser une image Node.js légère
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers
COPY . .

# Exposer le port de l'application
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", "app.js"]
