const { _user } = useAuth();
  const [favorites, setFavorites] = useState<FirestoreFavorite[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {;