async function createWorkspace() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { error } = await supabase
    .from("workspaces")
    .insert([
      {
        business_name: businessName,
        owner_email: user?.email,
      },
    ]);

  if (error) {
    alert(error.message);
  } else {
    alert("Workspace Created");
    loadWorkspaces();
  }
}