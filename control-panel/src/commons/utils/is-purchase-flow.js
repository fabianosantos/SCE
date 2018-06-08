import { getAllQueryParams } from '../query'

export default function isPurchaseFlow () {
  const { purchaseFlow, h } = getAllQueryParams()
	return purchaseFlow === "true" || h === "basket"
}