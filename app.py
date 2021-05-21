import requests
import json
import web3

if __name__ == "__main__":
    response = requests.get("https://api.compound.finance/api/v2/account")
    account_data = response.json()

    with open("test.json", "w") as f:
        json.dump(account_data, f, indent=2)