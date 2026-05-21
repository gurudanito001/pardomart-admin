import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  FeeApiFactory, 
  FeesDeactivateTypePatchTypeEnum 
} from '../../api-client/endpoints/fee-api';
import { CreateFeePayload, UpdateFeePayload } from '../../api-client/models';
import { Configuration } from '../../api-client/configuration';
import { toast } from 'sonner';

// Assuming base path and config are handled via a provider or central config
const feeApi = FeeApiFactory(new Configuration());

export const useFees = () => {
  const queryClient = useQueryClient();

  // This query fetches ALL fees, including inactive ones, for admin display.
  // The API client's feesCurrentGet() only fetches active fees.
  // A new endpoint feesAllGet() is assumed to exist in the API client for this purpose.
  // If feesAllGet() does not exist, you would need to implement it in the backend
  // and regenerate the API client, or adapt feesCurrentGet() to accept a filter for all.
  // For this implementation, we assume feesAllGet() is available.
  const feesQuery = useQuery({
    queryKey: ['fees', 'all'],
    queryFn: () => feeApi.feesAllGet().then(res => res.data),
  });

  const createFeeMutation = useMutation({
    mutationFn: (payload: CreateFeePayload) => feeApi.feesPost(payload).then(res => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fees'] });
      toast.success('Fee created successfully');
    },
    onError: () => toast.error('Failed to create fee'),
  });

  const updateFeeMutation = useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: UpdateFeePayload }) => 
      feeApi.feesIdPatch(payload, id).then(res => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fees'] });
      toast.success('Fee updated successfully');
    },
    onError: () => toast.error('Failed to update fee'),
  });

  const deleteFeeMutation = useMutation({
    mutationFn: (id: string) => feeApi.feesIdDelete(id).then(res => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fees'] });
      toast.success('Fee deleted successfully');
    },
    onError: () => toast.error('Failed to delete fee'),
  });

  const deactivateMutation = useMutation({
    mutationFn: (type: FeesDeactivateTypePatchTypeEnum) => feeApi.feesDeactivateTypePatch(type).then(res => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fees'] });
      toast.success('Fee type deactivated');
    },
    onError: () => toast.error('Failed to deactivate fee type'),
  });

  return {
    fees: feesQuery.data ?? [],
    isLoading: feesQuery.isLoading,
    createFee: createFeeMutation.mutateAsync,
    updateFee: updateFeeMutation.mutateAsync,
    deleteFee: deleteFeeMutation.mutateAsync,
    deactivateFee: deactivateMutation.mutateAsync,
  };
};