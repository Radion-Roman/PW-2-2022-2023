# PPW-2

## Project name: Fan Club for gamers.
## Entities: https://app.diagrams.net/#G1YKiwJn8hsOaH9wVpJGwIQGUtVsbPGPs0

Games
```
{
 game_id: number(PK, autoincrement),
 game_name: string(required, min: 10: max: 100),
 game_image: varbinary(max),
 game_genre: char(required, min: 3: max: 50),
 coment_id: int(FK, required to coment_id),
 game_category: int(FK, required to game_category),
 game_descriptions: int(required, min: 50: max: 400),
}
```

Users
```
{
 user_id: number(PK, autoincrement),
 name_first: string(required, min: 2: max: 60),
 Name_last: string(required, min: 2: max: 60),
 gmail: string(required, min: 2: max: 60),
 nick_name: string(required, min: 2: max: 60),
 user_logo: varbinary(max),
 favoryte_game: int(FK, required to favorite_game),
 privilege: char(required, min: 1: max: 5),
}
```

Categoriy
```
{
 game_id: number(FK, autoincrement),
 game_category: string(required, min: 5: max: 50),
 game_genre: char(required, min: 3: max: 50),
}
```

Chat
```
{
 comment_id: number(PK, autoincrement),
 user_id: number(FK,  required to user_id),
 game_id: number(FK, autoincrement),
 like_id: int(required, min: 0: max: 10000),
 add_mage: varbynary(max),
}
```

Like
```
{
 like_id: int(PK),
 user_id: number(FK,  required to user_id),
 comment_id: number(FK, required to coment_id)
}
```

FGame
```
{
 favorite_game: int(PK, required to favorite_game),
 user_id: number(FK, autoincrement),
 game_id: number(FK, autoincrement),
}
````

