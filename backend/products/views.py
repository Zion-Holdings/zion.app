import pandas as pd
from io import TextIOWrapper
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt

from .models import Product

REQUIRED_COLUMNS = ["name", "category", "price", "description", "stock", "image_url"]

@csrf_exempt
@require_POST
def bulk_upload(request):
    file = request.FILES.get('file')
    if not file:
        return JsonResponse({'error': 'No file provided'}, status=400)
    try:
        df = pd.read_csv(TextIOWrapper(file, encoding='utf-8'))
    except Exception as e:
        return JsonResponse({'error': f'Invalid CSV: {e}'}, status=400)

    missing = [c for c in REQUIRED_COLUMNS if c not in df.columns]
    if missing:
        return JsonResponse({'error': f'Missing columns: {", ".join(missing)}'}, status=400)

    created = 0
    errors = []

    for idx, row in df.iterrows():
        try:
            name = str(row['name']).strip()
            category = str(row['category']).strip()
            price = float(row['price'])
            description = str(row['description']).strip()
            stock = int(row['stock'])
            image_url = str(row.get('image_url', '')).strip()
            if not name or not category:
                raise ValueError('Name and category required')
            Product.objects.create(
                name=name,
                category=category,
                price=price,
                description=description,
                stock=stock,
                image_url=image_url,
            )
            created += 1
        except Exception as e:
            errors.append({'row': idx + 2, 'error': str(e)})

    return JsonResponse({'created': created, 'errors': errors})
