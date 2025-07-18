const { items, dispatch } = useCart();
const { _formatPrice } = useCurrency();
const [selectedImageIndex, setSelectedImageIndex] = useState(0);
const [quantity, setQuantity] = useState(1);
const [isAdding, setIsAdding] = useState(false);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);
