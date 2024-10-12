"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import Image from "next/image";

export const columns: ColumnDef<any>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "image",
    header: "IMAGE",
    cell: ({ row }) => (
      <Image
        src={row.original.image ?? ""}
        alt="image-waste-exchanges"
        width={100}
        height={100}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "user.name",
    header: "USER",
  },
  {
    accessorKey: "weight",
    header: "WEIGHT",
  },
  {
    accessorKey: "total_coin",
    header: "TOTAL COIN",
  },
  {
    accessorKey: "total_point",
    header: "TOTAL POINT",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
