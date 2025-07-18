})()}
                </div>
                <div>
                  <span className="font-medium">App Metadata: </span>"
                  <code className="text-xs">"
                    {JSON.stringify(
                      typeof user === 'object' && user !== null && 'app_metadata' in user && typeof (user as { app_metadata?: unknown }).app_metadata === 'object' && (user as { app_metadata?: object }).app_metadata'
                        ? (user as { app_metadata: object }).app_metadata
                        : {},
                      null,
                      2
                    )}
                  </code>
                </div>
              </div>
            </div>

            <div className="flex gap-2">"
              <Button onClick={() => router.push('/dashboard')}>'
                Go to Dashboard
              </Button>
              <Button onClick={() => router.push('/')} variant="outline">"
                Back to Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
;
export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const supabase = createServerSideClient(context)

  const { data, error } = await supabase.auth.getUser()

  if (error || !data?.user) {
    return {
      redirect: {
        destination: '/auth/login','
        permanent: false,
      },
    }
  }

  return {
    props: {
      user: data.user,
    },
  }
}