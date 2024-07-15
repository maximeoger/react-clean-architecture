import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ReviewRouter } from "../router"

export const useSendReview = () => {
  const router = ReviewRouter.init();
  const queryClient = useQueryClient()
  const { mutateAsync, isPending, error, isSuccess } = useMutation({
    mutationFn: async (review:string)=> {
        await new Promise((resolve)=> setTimeout(resolve, 3000))
        return router.sendReview(review)
    },
    onSuccess(data){
        queryClient.invalidateQueries({
            queryKey: ["movies-reviews", data.movieId]
        })
    }
  })
  
  return {
    onSendReview: (review: string) => mutateAsync(review),
    isSending: isPending,
    error,
    isSent: isSuccess,
  };

}