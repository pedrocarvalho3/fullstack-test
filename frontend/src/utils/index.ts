export const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "alive":
      return "bg-lime-300 text-dark";
    case "dead":
      return "bg-destructive text-destructive-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};
