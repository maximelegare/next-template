
import { api } from "~/utils/trpc/api";

export const useController = () => {


  
  const useGetExample = (o_id: string) =>
    api.example__QUERY.test.useQuery(
      {
        o_id,
      },
      {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        enabled: o_id !== "", // Do the query only if it's not a string
      }
    );
  

  const usePostExample = () =>
    api.example__MUTATION.test.useMutation({
      onSuccess: async () => {
         // await ctx.expenses__QUERY.getGroupExpenses.invalidate(); invalidate data here for cashing
        //  Can also redirect here afterwards
      },
    });


  return {
    useGetExample,
    usePostExample,
  };
};
