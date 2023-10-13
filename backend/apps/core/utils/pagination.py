
def pagination(queryset, serializer, page, size=15):
    page = page or 1
    offset = (page - 1) * size
    limit = offset + size
    serializer.instance = queryset[offset:limit]
    return {'count': queryset.count(), 'results': serializer.data}
