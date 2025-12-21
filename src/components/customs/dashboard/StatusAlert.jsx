import { Alert } from "@mui/material";

const StatusAlert = ({ status }) => {
  if (!status) return null;

  return (
    <div className="my-4">
      <Alert severity={status.severity} className="rounded-lg text-md">
        {status.message}
      </Alert>
    </div>
  );
};

export default StatusAlert;