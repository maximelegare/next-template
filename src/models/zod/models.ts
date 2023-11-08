
import {z } from "zod"




export type ExampleSchemaModel = z.infer<typeof ExampleSchema>

export {ExampleSchema}


const ExampleSchema = z.object({
    message:z.string()
})






























// import { z } from "zod";

// // export type BlockContentModel = z.infer<typeof ProjectSchema.shape.headline>;
// // export type LinksModel = z.infer<typeof ProjectSchema.shape.links>;

// export type ExpenseDetailsResponseSchemaModel = z.infer<
//   typeof ExpenseDetailsResponseSchema
// >;
// export type GroupExpensesResponseSchemaModel = z.infer<
//   typeof GroupExpensesResponseSchema
// >;

// export type ExpenseMemberSchemaModel = z.infer<typeof ExpenseMemberSchema>;
// export type UserBasicSchemaModel = z.infer<typeof UserBasicSchema>;
// export type ExpenseSchemaModel = z.infer<typeof ExpenseSchema>;
// export type GroupSchemaModel = z.infer<typeof GroupSchema>;
// export type UserSchemaModel = z.infer<typeof UserSchema>;
// export type FriendRequestResponseSchemaModel = z.infer<
//   typeof FriendRequestResponseSchema
// >;

// export {
//   UserSchema,
//   GroupSchema,
//   GroupExpensesResponseSchema,
//   ExpenseDetailsResponseSchema,
//   ExpenseMemberSchema,
//   UserBasicSchema,
//   FriendRequestResponseSchema,
//   ExpenseSchema,
// };

// const o_id = z.string();

// const ExpenseMemberSchema = z.object({
//   memberId: z.string(),
//   isPaid: z.boolean(),
//   isPaymentReceived: z.boolean(),
//   dueAmount: z.number(),
//   ratio: z.object({
//     numerator: z.number(),
//     denominator: z.number(),
//   }),
//   name: z.string(),
//   email: z.string(),
//   image: z.string(),
// });

// const ExpenseSchema = z.object({
//   o_id,
//   totalAmount: z.number(),
//   dueAmount: z.number(),
//   payerId: z.string(),
//   name: z.string(),
//   category: z.string(),
//   categoryImageUrl: z.string(),
//   members: z.array(ExpenseMemberSchema),
//   dates: z.object({
//     creation: z.string(),
//     start: z.string(),
//     end: z.string(),
//     deadline: z.string(),
//     archive: z.string(),
//   }),
// });

// const UserBasicSchema = z.object({
//   o_id,
//   name: z.string(),
//   email: z.string(),
//   image: z.string(),
// });

// const GroupSchema = z.object({
//   o_id,
//   name: z.string(),
//   groupImageUrl: z.string(),
//   members: z.array(UserBasicSchema),
// });

// const UserSchema = z.object({
//   o_id,
//   name: z.string(),
//   email: z.string(),
//   image: z.string(),
//   groups: z.array(GroupSchema),
//   friends: z.array(UserBasicSchema),
//   archives: z.array(ExpenseSchema),
// });

// const GroupExpensesResponseSchema = z.object({
//   expenses: z.array(ExpenseSchema),
//   groupName: z.string(),
//   groupId: z.string(),
// });

// const ExpenseDetailsResponseSchema = z.object({
//   expense: ExpenseSchema,
//   groupName: z.string(),
//   groupId: z.string(),
// });

// const FriendRequestResponseSchema = z.object({
//   from: UserBasicSchema,
//   to: z.string(),
//   timeStamp: z.number(),
//   o_id: z.string(),
// });



