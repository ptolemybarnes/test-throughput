require 'net/http'

class Application
  def call(env)
    uri = URI::HTTP.build(host: 'localhost', path: '/', port: 3000)
    response = Net::HTTP.get(uri)

    [
      200,
      { "Content-Type" => "text/html" },
      ["Response: " + response]
    ]
  end
end
