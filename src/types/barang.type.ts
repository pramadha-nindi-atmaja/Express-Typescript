import { Decimal } from '@prisma/client/runtime/library'

export default interface BarangType {
  id: number
  nama: string
  jumlah: number
  harga: Decimal
  categoryId?: number | null
  created_at?: Date
  updated_at?: Date
}
