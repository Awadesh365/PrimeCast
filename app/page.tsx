import { UserButton } from "@clerk/nextjs"

export default function Page() {
  return (
    <p className=
      "flex flex-col gap-y-4">
      <h1>Dashboard</h1>
      <UserButton
        afterSignOutUrl="/"
      />
    </p>
  )
}
