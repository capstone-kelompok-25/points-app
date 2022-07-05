export default function ({ redirect, app }) {
  if (!app.$cookies.get("userData")) {
    redirect("/login");
  }
}
