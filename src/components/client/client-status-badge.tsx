import { cn } from '@/lib/utils';

interface ClientStatusBadgeProps {
  status: string;
  className?: string;
}

export function ClientStatusBadge({ status, className }: ClientStatusBadgeProps) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
      case 'actif':
      case 'validated':
      case 'validé':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'pending':
      case 'en attente':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'rejected':
      case 'rejeté':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'draft':
      case 'brouillon':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
        getStatusColor(status),
        className
      )}
    >
      {status}
    </span>
  );
}
