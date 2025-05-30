from dataclasses import dataclass
from .models import Coupon, GiftCard

@dataclass
class CouponSerializer:
    code: str
    discount_type: str
    value: str
    expires: str | None
    usage_limit: int | None
    usage_count: int

    @classmethod
    def from_instance(cls, obj: Coupon) -> 'CouponSerializer':
        return cls(
            code=obj.code,
            discount_type=obj.discount_type,
            value=str(obj.value),
            expires=obj.expires.isoformat() if obj.expires else None,
            usage_limit=obj.usage_limit,
            usage_count=obj.usage_count,
        )

@dataclass
class GiftCardSerializer:
    code: str
    balance: str

    @classmethod
    def from_instance(cls, obj: GiftCard) -> 'GiftCardSerializer':
        return cls(code=obj.code, balance=str(obj.balance))
