# PARTAGO

Partago est une application permettant de diviser les dépenses entre les différents membres d'un même groupe. Le projet à été démarrée à l'aide du template Next.js [T3 Stack](https://create.t3.gg/).


Voici les principales technologies utilisés dans le projet ainsi que leur documentation respective:

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [DaisyUI](https://daisyui.com/)
- [tRPC](https://trpc.io)
- [Recoil](https://recoiljs.org/)
- [Zod](https://zod.dev/)
  


## Structure de Dossiers

### <u>Front-end</u> 
##### `► /src/pages/`
Vous pouvez consulter la documentation de [Next.js](https://nextjs.org/docs/pages/building-your-application/routing) pour le fonctionnement du dossier pages. 

##### `► /src/components/pages/NomDeLaPage` 
Chaque page créée possède un dossier du même nom dans `src/components/pages`. Le dossier `/sections` possède toutes les sections présentes dans la page (individuellenent en composantes). Elles sont toutes importés dans l'Index.tsx présent dans le root de ce même dossier. Le contenu est finalement exporté sous le nom de <em>Content</em> dans le fichier NomDeLaPageContent.tsx. C'est ce fichier qui est importé dans le fichier page. 

##### `► /src/components/core`
Les composantes réutilisables se trouvent à l'intérieur de ce dossier.

##### `► /src/layout`
Toutes les mise en page (layout) se trouvent dans le dossier `/src/layout/layouts`. Ils sont tous importés dans le fichier `Layout.tsx` et changent selon la page. Les autres composantes faisant parti du layout tels que les dialogs, la sidebar, etc. sont également sités dans ce dossier. 

### <u>Hooks</u>

##### `► /src/hooks/useController.ts`
Toutes les requêtes au backend passent par le hook `useController.ts`. Chaque fonction retourne une fonction permettant d'accéder aux élément retournés par la procédure qui lui correspond. (Voir [tRPC](https://trpc.io) et [TanStack Query](https://tanstack.com/query/latest))

##### `► /src/hooks/useDialogs.ts`
L'ouverture et la fermeture du dialogue sont réalisés à l'aide de ce hook. Les différents dialogues se trouvent dans le dossier `/src/components/core/dialogs`. Le dialogue est ouvert globalement à l'aide de l'atome `/atoms/dialogAtom.ts`.

### <u>Backend</u> 

##### `► /src/server/api/routers`
Les procédures tRPC (l'équivalent des routes d'un REST API) se trouvent dans ce dossier. Vous pouvez vous référer à la documention [tRPC](https://trpc.io) pour comprendre son fonctionnement.

##### `► /src/server/queries`
Chaque procédure tRPC appèle une fonction provenant du dossier queries. C'est à cet endroit que se trouve les requêtes mongoDB. Ces fonctions retournent les documents [JSON](https://www.w3schools.com/js/js_json_intro.asp) provenant de la base de données.

##### `► /src/models/zod`
Tout le contenu provenant de la database est validé dans un schéma [zod](https://zod.dev/) permettant de vérifier si le JSON reçu est conforme ou s'il manque des éléments.  

Une fois les données validées, elles sont retournés au front-end avec le typage approprié.

##### `► /src/models/mongoose`
Les schéma de création de données mongoose se trouvent dans ce dossier. Ces schémas devraient être pratiquement identiques aux schémas zod.

##### `► /src/server/auth.ts`
Dans ce fichier, on retrouve la logique d'authentification avec [NextAuth.js](https://next-auth.js.org). Le tout est importé dans `src/pages/api/auth/[...nextauth].ts`.



### <u>Autres</u>

##### `► /src/utils`
Les fonctions qui seront réutilisées un peu partout dans l'application se trouvent à l'intérieur de ce dossier.


##### `► /src/env.mjs`
Lorsqu'une variable environnementale doit être ajoutée, ce fichier doit-être modifié ainsi que le fichier `.env.example`. Finalement vous devez ajouter la variable dans votre fichier `.env` local.

##### `► /atoms`
Nous utilisons [Recoil](https://recoiljs.org/) comme <em>state manager</em> dans l'application. La création d'atomes s'effectue à l'intérieur de ce dossier. Par contre, nous priorisons les fonctionnalités de <em>caching</em> de [Tanstack Query](https://tanstack.com/query/latest) à l'utilisation d'atomes.

## Routers et Procédures

Ces fonctions doivent être importés à partir du hook `useController.ts` et sont également utilisés de la même manière qu'un hook.

### <u>Queries:</u>

##### User

|Hook|Params|Retour (zod schema)|
|:-------------------|:---------------------|:----------------------|
|`fetchUserFriends()`|<em>userO_id: </em>**String**| UserBasicSchema[]|


##### Groups

|Hook|Params|Retour (zod schema)|
|:-------------------|:---------------------|:----------------------|
|`fetchUserGroups()`|<em>userO_id: </em>**String**| GroupSchema[]|
|`addFriendsToGroup()`|<em>userO_id: </em>**String**| void|
|`createGroup()`|<em>userO_id: </em>**String**| void|



##### Expenses

|Hook|Params|Retour (zod schema)|
|:-------------------|:---------------------|:----------------------|
|`fetchGroupExpenses()`|<em>groupO_id: </em>**String**| GroupExpensesResponseSchema[]|
|`fetchExpenseById()`|<em>expenseO_id: </em>**StExpenseDetailsResponseSchema[]|

### <u>Mutations:</u>

##### Groups

|Hook|Params (mutation)| Params (hook) |Retour (zod schema) |
|:-------------------|:---------------------|:----------------------|:-----|
|`addFriendsToGroup()`| Data | <em>groupO_id: </em>**String** |void|
|`createGroup()`|Data| NA |void|

##### Expenses
|Hook|Params (mutation)| Params (hook) |Retour (zod schema) |
|:-------------------|:---------------------|:----------------------|:-----|
|`createExpense()`| Data | NA |void|
|`createGroup()`|Data| NA | void |
|`updateIsPaid()`|<em>o_id:</em> **String** <br> <em>memberId:</em> **String**| NA | void |
|`updateIsPaymentReceived()`|<em>o_id:</em> **String** <br> <em>memberId:</em> **String** <br> <em>value:</em> **Boolean**| NA | void |
|`deleteExpense()`|<em>o_id:</em> **String** | NA | void |
