import { z } from "zod";

export const CreateGroupSchema = z.object({
  name: z.string({ required_error: "Veuillez entrer le nom du groupe." }),
})

export const CreateExpenseSchema = z.object({
  name: z.string({ required_error: "Veuillez entrer le nom de la dépense." }),
  totalAmount: z.number({ required_error: "Veuillez entrer le montant de la facture." }),
  category: z.string({ required_error: "Veuillez entrer une catégorie" })
});

export const AddFriendSchema = z.object({
  email:z.string({required_error:"Entrez le email d'un membre"})
})