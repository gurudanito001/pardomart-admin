import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import type { SupportTicket, TicketStatus } from '../../../api-client';
import { TicketStatus as TicketStatusEnum } from '../../../api-client';
import { toast } from 'sonner';
import { useUpdateTicketStatus } from '@/hooks/useUpdateTicketStatus';

interface UpdateTicketStatusModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  ticket: SupportTicket | null;
  onStatusUpdated?: (ticket: SupportTicket) => void;
}

const statusOptions = [
  { value: TicketStatusEnum.Open, label: 'Open', color: '#21C45D' },
  { value: TicketStatusEnum.InProgress, label: 'In Progress', color: '#FBBD23' },
  { value: TicketStatusEnum.Resolved, label: 'Resolved', color: '#06A561' },
  { value: TicketStatusEnum.Closed, label: 'Closed', color: '#EF4343' },
];

export function UpdateTicketStatusModal({
  open,
  onOpenChange,
  ticket,
  onStatusUpdated,
}: UpdateTicketStatusModalProps) {
  const [selectedStatus, setSelectedStatus] = useState<TicketStatus | null>(ticket?.status || null);
  const { updateStatus, loading } = useUpdateTicketStatus();

  const handleStatusChange = (status: TicketStatus) => {
    setSelectedStatus(status);
  };

  const handleUpdateStatus = async () => {
    if (!ticket?.id || !selectedStatus) {
      toast.error('Invalid ticket or status');
      return;
    }

    try {
      const updatedTicket = await updateStatus(ticket.id, selectedStatus);
      if (updatedTicket) {
        toast.success('Ticket status updated successfully');
        onStatusUpdated?.(updatedTicket);
        onOpenChange(false);
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to update ticket status');
    }
  };

  const currentStatus = statusOptions.find(s => s.value === ticket?.status);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* ADDED: bg-white, shadow-2xl, and border-0 to ensure perfect contrast and readability */}
      <DialogContent className="sm:max-w-[425px] bg-white border-0 shadow-2xl p-6">
        <DialogHeader>
          {/* ENFORCED: Darker text for the title */}
          <DialogTitle className="text-xl font-bold text-gray-900">Update Ticket Status</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
            <p className="text-sm font-semibold text-gray-900 mb-1">Ticket ID: <span className="font-normal">{ticket?.id}</span></p>
            <p className="text-sm font-semibold text-gray-900">Current Status: <span className="font-normal">{currentStatus?.label || 'Unknown'}</span></p>
          </div>

          <div>
            <label className="text-sm font-bold text-gray-900 mb-3 block">
              Select New Status
            </label>
            <div className="space-y-2">
              {statusOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleStatusChange(option.value as TicketStatus)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border-2 transition-colors ${
                    selectedStatus === option.value
                      ? 'border-[#06888C] bg-[#F0F9FB]'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div
                    className="w-4 h-4 rounded-full shadow-sm"
                    style={{ backgroundColor: option.color }}
                  />
                  <span className="text-sm font-semibold text-gray-900">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <DialogFooter className="mt-2">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={loading}
            className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
          >
            Cancel
          </Button>
          <Button
            onClick={handleUpdateStatus}
            disabled={loading || selectedStatus === ticket?.status}
            className="bg-[#06888C] text-white hover:bg-[#057579]"
          >
            {loading ? 'Updating...' : 'Update Status'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}