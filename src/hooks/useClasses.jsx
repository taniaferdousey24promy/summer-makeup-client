import { useQuery } from "@tanstack/react-query";

const useClasses = () => {
  const {
    data: allclasses = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["allclasses"],
    queryFn: async () => {
      const res = await fetch(
        "https://summer-makeup-server-taniaferdousey24promy.vercel.app/allclasses"
      );
      return res.json();
    },
  });

  return [allclasses, loading, refetch];
};

export default useClasses;
