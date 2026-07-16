import httpx, asyncio
async def test():
    token = "8505039818:AAEWp7pleA8jbTZJWqQpJxTDyua4Ie7QYo0"
    # Send a message to yourself
    async with httpx.AsyncClient() as c:
        r = await c.post(f"https://api.telegram.org/bot{token}/sendMessage", json={
            "chat_id": 8188640390,
            "text": "Test message from Render - is bot awake?"
        })
        print(f"Send result: {r.status_code} - {r.json().get('description', 'ok')}")

asyncio.run(test())
