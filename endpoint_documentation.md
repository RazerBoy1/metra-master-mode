# Front-end to back-end

## SEND_OPEN_LOCKERS

The call is located in the keypad.vue file. It opens a certain locker

Example json that gets send to the back-end.

```json
{
	lockersToUnlock: [2, 4, 10, 41]
}
```

## SEND_OPEN_ALL_LOCKERS

This call is located in the group.vue file. It opens all of the lockers. The call doesn't send anything.

## SEND_OPEN_ALL_LOCKERS_ON_LOCATION

This call is located in the group.vue file. It opens all of the lockers on this location. The call doesn't send anything.

## SEND_SETTINGS_VALUE

This call is located in the settings.vue file. It is an example call.

Example json that gets send to the back-end.

```json
{
	settings: 'settings1'
}
```

## SEND_SLIDER_VALUE

This call is located in the settings.vue file. It is an example call.

Example json that gets send to the back-end.

```json
{
	value: '3'
}
```

## GET_SETTINGS_DATA

This call is located in the rightSideNav.vue file. It gets the settings data; a number from 0 to 1, which represents a boolean value and a string, which represents a number.

## SET_SETTINGS_DATA

This call is located in the settings.vue file. It sends the settings data from the front-end to the back-end and then writes it into a file called settingsData.txt in the back-end.

## SEND_TIMEOUT

This call is located in the masterModePage.vue. After 20s of inactivity on the master mode page this timeout is send to the back-end to notify it of the timeout.




# Back-end to front-end

## OPENED_LOCKER

This call sends a number to the front-end, so the front-end knows which locker was opened.

## OPENED_ALL_LOCKERS

When this call is send to the front-end the front-end knows that all the lockers have been successfully opened.

## OPENED_ALL_LOCKERS_ON_LOCATION

When this call is send to the front-end the front-end knows that all the lockers on this location have been successfully opened.

## SETTINGS_DATA
This call sends a value from 0 to 1, which represent a boolean value, and it sends a string which represents a number.

```json
{
    'boolean': 0,
    'number': '5'
}
```

## GO_TO_MASTER_PAGE

This call is located in the homePage.vue. When the back-end calls it, it redirects the front-end to the master mode page. This call is not yet implemented in the back-end !

