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
    header: "BACKGROUND IMAGE",
    size: 50,
    cell: ({ row }) => (
      <Image src={row.original?.image} width={100} height={100} alt="image" />
    ),
  },
  {
    accessorKey: "name",
    header: "NAME",
    size: 100,
    cell: ({ row }) => <p>{row.original?.name}</p>,
  },
  {
    accessorKey: "description",
    header: "DESCRIPTION",
    size: 200,
    cell: ({ row }) => (
      <div
        dangerouslySetInnerHTML={{
          __html: row.original?.description?.slice(0, 200) + "...",
        }}
      />
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
